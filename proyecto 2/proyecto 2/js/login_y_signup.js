class Slider {
    constructor(sliderId) {
        this.images = document.getElementById(sliderId).getElementsByTagName('img');
        this.currentIndex = 0;
        this.startSlider();
    }

    startSlider() {
        setInterval(() => this.changeImage(), 2000);
    }

    changeImage() {
        this.images[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.images[this.currentIndex].classList.add('active');
    }
}

class ModeSwitcher {
    constructor(buttonId, bodyClass, linkContainerId, linkClass) {
        this.body = document.getElementsByTagName('body')[0];
        this.footerLinks = document.getElementById(linkContainerId).getElementsByTagName('a');
        this.darkModeClass = bodyClass;
        this.linkDarkModeClass = linkClass;

        document.getElementById(buttonId).addEventListener('click', (e) => {
            e.preventDefault();
            this.changeMode();
        });
    }

    changeMode() {
        if (this.body.classList.contains(this.darkModeClass)) {
            this.body.classList.remove(this.darkModeClass);
            this.updateLinks(false);
        } else {
            this.body.classList.add(this.darkModeClass);
            this.updateLinks(true);
        }
    }

    updateLinks(add) {
        for (let link of this.footerLinks) {
            if (add) {
                link.classList.add(this.linkDarkModeClass);
            } else {
                link.classList.remove(this.linkDarkModeClass);
            }
        }
    }
}

class FormValidator {
    constructor(formId, passwordId, confirmPasswordId, errorMessageId) {
        this.password = document.getElementById(passwordId);
        this.confirmPassword = document.getElementById(confirmPasswordId);
        this.errorMessage = document.getElementById(errorMessageId);

        document.getElementById(formId).addEventListener('submit', (e) => {
            e.preventDefault();
            this.verifyForm();
        });
    }

    verifyForm() {
        if (this.password.value.length < 6) {
            this.errorMessage.innerHTML = "Password is too short";
            return false;
        }

        if (this.confirmPassword && this.password.value !== this.confirmPassword.value) {
            this.errorMessage.innerHTML = "Passwords don't match";
            return false;
        }

        return true;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new Slider('slide-content');
    new ModeSwitcher('dark-btn', 'dark', 'links', 'dark-mode-link');
    new FormValidator('login-form', 'passsword', null, 'error_message');
    new FormValidator('signup-form', 'passsword', 'password_confirm', 'error_message');
});
