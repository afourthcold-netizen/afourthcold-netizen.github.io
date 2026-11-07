const copyButton = document.querySelector('[data-copy-email]');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      status.textContent = 'メールアドレスをコピーしました。';
    } catch {
      status.textContent = 'コピーできませんでした。表示されているアドレスを選択してコピーしてください。';
    }
  });
}
