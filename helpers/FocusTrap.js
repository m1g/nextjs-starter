export default function FocusTrap({ isActive, children }) {
  const topTabTrap = React.useRef();
  const bottomTabTrap = React.useRef();
  const container = React.useRef();

  React.useEffect(() => {
    document.addEventListener('focusin', trapFocus);

    return function cleanup() {
      document.removeEventListener('focusin', trapFocus);
    };

    function trapFocus(e) {
      if (!isActive) {
        return;
      }

      if (e.target === topTabTrap.current) {
        const elements = getFocusableElements();

        if (elements.length > 0) {
          const lastElement = elements[elements.length - 1];
          lastElement.focus();
        }
      }
      if (e.target === bottomTabTrap.current) {
        const elements = getFocusableElements();

        if (elements.length > 0) {
          const firstElement = elements[0];
          firstElement.focus();
        }
      }
    }

    function getFocusableElements() {
      if (!container.current) {
        return [];
      }

      const FOCUSABLE_SELECTOR = [
        'button',
        'a[href]',
        'input',
        'select',
        'textarea',
        '[tabindex]',
        '[contenteditable]',
      ]
        .map((selector) => `${selector}:not(:disabled):not([disabled])`)
        .join(', ');

      return Array.from(container.current.querySelectorAll(FOCUSABLE_SELECTOR))
        .filter((element) => element !== topTabTrap.current)
        .filter((element) => element !== bottomTabTrap.current);
    }
  }, [isActive, topTabTrap, bottomTabTrap]);

  return (
    <div ref={container}>
      {isActive && <span ref={topTabTrap} tabIndex="0" />}
      {children}
      {isActive && <span ref={bottomTabTrap} tabIndex="0" />}
    </div>
  );
}
