import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageProvider.jsx";

export function render(locale = "en") {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let markup = "";
    output.setEncoding("utf8");
    output.on("data", (chunk) => {
      markup += chunk;
    });
    output.on("end", () => resolve(markup));
    output.on("error", reject);
    const stream = renderToPipeableStream(
      <LanguageProvider locale={locale}>
        <App />
      </LanguageProvider>,
      {
        onAllReady() {
          stream.pipe(output);
        },
        onError: reject,
      },
    );
  });
}
