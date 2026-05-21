(function () {
  const copyButton = document.querySelector("[data-copy-email]");
  const feedback = document.querySelector("[data-copy-feedback]");

  if (!copyButton || !feedback) {
    return;
  }

  const email = copyButton.getAttribute("data-copy-email");
  let feedbackTimer;

  function message(key, fallback) {
    return window.PortfolioI18n?.t?.(`home.contactCards.${key}`, fallback) || fallback;
  }

  function showFeedback(message) {
    feedback.textContent = message;
    window.clearTimeout(feedbackTimer);
    feedbackTimer = window.setTimeout(() => {
      feedback.textContent = "";
    }, 2200);
  }

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      showFeedback(message("copied", "Copied"));
    } catch (error) {
      showFeedback(message("copyFailed", "Copy failed"));
    } finally {
      document.body.removeChild(textArea);
      copyButton.focus();
    }
  }

  copyButton.addEventListener("click", async () => {
    if (!email) {
      showFeedback(message("copyFailed", "Copy failed"));
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        showFeedback(message("copied", "Copied"));
        return;
      } catch (error) {
        fallbackCopy(email);
        return;
      }
    }

    fallbackCopy(email);
  });
})();
