"""Build the one-page, selectable-text CV from the portfolio data (ReportLab)."""
from pathlib import Path
import json
import subprocess
from html import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
result = subprocess.run(['node', '--input-type=module', '-e', '''
import { profile } from './src/data/profile.js';
import { projects } from './src/data/projects.js';
import { education } from './src/data/journey.js';
console.log(JSON.stringify({profile, projects, education}));
'''], cwd=ROOT, check=True, capture_output=True, text=True)
data = json.loads(result.stdout)
p = data['profile']
for name, filename in [('CV','DejaVuSans.ttf'),('CV-Bold','DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/usr/share/fonts/truetype/dejavu/'+filename))
pdfmetrics.registerFontFamily('CV',normal='CV',bold='CV-Bold',italic='CV',boldItalic='CV-Bold')
styles = {
    'name': ParagraphStyle('Name',fontName='CV-Bold',fontSize=22,leading=26,textColor=colors.HexColor('#152334'),spaceAfter=5),
    'role': ParagraphStyle('Role',fontName='CV-Bold',fontSize=11,leading=15,textColor=colors.HexColor('#384e62'),spaceAfter=6),
    'contact': ParagraphStyle('Contact',fontName='CV',fontSize=8,leading=12,textColor=colors.HexColor('#334155'),spaceAfter=3),
    'body': ParagraphStyle('Body',fontName='CV',fontSize=8.6,leading=12.5,textColor=colors.HexColor('#263342'),spaceAfter=4),
    'section': ParagraphStyle('Section',fontName='CV-Bold',fontSize=9,leading=14,spaceBefore=10,spaceAfter=5,textColor=colors.HexColor('#152334'),borderWidth=.5,borderColor=colors.HexColor('#cbd5e1'),borderPadding=3),
    'project': ParagraphStyle('Project',fontName='CV-Bold',fontSize=9,leading=13,spaceAfter=3,textColor=colors.HexColor('#152334')),
}
output = ROOT/'public/cv/Rover-Serrano-CV.pdf'
output.parent.mkdir(exist_ok=True,parents=True)
doc = SimpleDocTemplate(str(output),pagesize=A4,rightMargin=37,leftMargin=37,topMargin=31,bottomMargin=30,title=p['name']+' - Full Stack Junior',author=p['name'],subject='CV de una página - proyectos, desarrollo full stack y formación',pageCompression=1)
story=[]
def para(text,style='body'):
    return Paragraph(text,styles[style])
def section(text):
    story.append(para(text,'section'))
story += [para(escape(p['name']).upper(),'name'),para(escape(p['role'])+' | React · Node.js · Python','role')]
story += [para(f'{escape(p["location"])} | Remoto · GMT-4 | Disponible full-time','contact')]
story += [para(f'<a href="mailto:{p["email"]}">{p["email"]}</a> | {p["phone"]}','contact')]
story += [para(f'<a href="{p["github"]}">github.com/roverserrano</a> | <a href="{p["linkedin"]}">linkedin.com/in/rover-serrano</a> | <a href="https://portafolio-jidm.onrender.com/">Portafolio</a>','contact')]
section('PERFIL')
story.append(para('Licenciado en Ingeniería de Sistemas Informáticos (Univalle, 2026), en búsqueda de mi primer rol full stack. Construyo interfaces, APIs REST e integraciones con datos e IA. En BoviSense integré visión artificial, dispositivos IoT y una app móvil: conteo de ~2 horas a ~5 minutos por lote en el prototipo.'))
section('PROYECTOS Y EXPERIENCIA PRÁCTICA')
bullets = [
    ['Integré el modelo de detección, Jetson Orin Nano, ESP32, LoRa/BLE y app Flutter; backend Node.js/Express con Firebase.', 'Resultado reportado del prototipo: mAP 0.87 y conteo de ~2 h a ~5 min por lote. Pruebas funcionales, de integración y end-to-end.'],
    ['Desarrollé la integración de dos modelos NLP para sentimiento y detección de bots, con inferencia en FastAPI, entrenamiento en Colab y visualización en React.'],
    ['Desarrollé una bóveda Flutter/Dart con Supabase, cifrado XChaCha20-Poly1305, derivación Argon2id, generador de contraseñas y desbloqueo biométrico.'],
    ['Implementé módulos de registro y seguimiento de derivaciones, roles y formularios con React, NestJS, TypeORM y MySQL. Repositorio privado disponible bajo solicitud.'],
]
for project, lines in zip(data['projects'], bullets):
    label = f'{escape(project["name"])} | {escape(project["type"])} | {escape(project["timeline"].replace("—","-"))}'
    group=[para(label,'project')]
    group += [para('• '+line) for line in lines]
    if project['repoUrl']:
        group.append(para(f'<a href="{project["repoUrl"]}">{project["repoUrl"].replace("https://", "")}</a>','contact'))
    group.append(Spacer(1,5))
    story.append(KeepTogether(group))
section('HABILIDADES TÉCNICAS')
story.append(para('<b>Principal:</b> React, JavaScript, Tailwind CSS, Node.js, APIs REST, Python, Git/GitHub.'))
story.append(para('<b>En proyectos:</b> TypeScript, NestJS, Express, FastAPI, MySQL, Firebase, Supabase, Flutter, TensorFlow, NLP, Linux.'))
section('EDUCACIÓN')
story.append(para('<b>'+escape(data['education']['degree'])+'</b><br/>'+escape(data['education']['institution'])+' | 2020 - 2026'))
section('FORMACIÓN COMPLEMENTARIA E IDIOMAS')
story.append(para('AWS Cloud Practitioner Essentials (curso, 2025) · HCIA-Cloud Computing V5.5 (curso, 2025) · Cloud Computing, Skillshop (2026).'))
story.append(para('<b>Idiomas:</b> Español nativo · Inglés intermedio B1.'))
doc.build(story)
print(output)
