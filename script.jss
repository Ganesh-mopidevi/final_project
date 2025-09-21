/* =======================
   Global Variables & Themes
======================= */
:root {
  /* Brand Colors */
  --clr-primary: #4e54c8;
  --clr-success: #28a745;
  --clr-success-dark: #218838;
  --clr-error: #dc3545;
  --clr-error-dark: #c82333;
  --clr-info: #007bff;
  --clr-info-dark: #0056b3;

  /* UI Tokens */
  --radius-sm: 6px;
  --radius-md: 10px;
  --shadow-toast: 0 8px 24px rgba(0, 0, 0, 0.2);
  --transition-fast: 0.2s;
  --transition-base: 0.35s;
  --font-size-base: 0.95rem;
}

/* =======================
   Menu Toggle Button
======================= */
.menu-toggle {
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  transition: transform var(--transition-base) ease;
}

.menu-toggle.active {
  transform: rotate(90deg) scale(1.1);
}

/* =======================
   Form Inputs & Textareas
======================= */
input,
textarea {
  width: 100%;
  font-size: var(--font-size-base);
  padding: 0.6rem 0.75rem;
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-base) ease, box-shadow var(--transition-base) ease;
  outline: none;
  background: #fff;
  color: #333;
}

input::placeholder,
textarea::placeholder {
  color: #999;
  font-size: 0.9rem;
}

input:focus,
textarea:focus {
  border-color: var(--clr-primary);
  box-shadow: 0 0 8px rgba(78, 84, 200, 0.3);
}

input.success,
textarea.success {
  border-color: var(--clr-success);
  background-color: #e6ffef;
}

input.error,
textarea.error {
  border-color: var(--clr-error);
  background-color: #ffeef0;
}

/* =======================
   Toast Notifications
======================= */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 280px;
  max-width: 350px;
  padding: 1rem 1.25rem;
  background: var(--clr-primary);
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.4;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-toast);
  pointer-events: none;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  z-index: 9999;
  transition: opacity var(--transition-base) ease, transform var(--transition-base) ease;
}

/* Show state */
.toast.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
  animation: slideIn 0.4s ease, fadeOut 0.4s ease 4s forwards;
}

/* Toast Types */
.toast.success {
  background: linear-gradient(135deg, var(--clr-success), var(--clr-success-dark));
}

.toast.error {
  background: linear-gradient(135deg, var(--clr-error), var(--clr-error-dark));
}

.toast.info {
  background: linear-gradient(135deg, var(--clr-info), var(--clr-info-dark));
}

/* =======================
   Keyframe Animations
======================= */
@keyframes slideIn {
  from {
    transform: translateY(40px) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
}
