import { type Page } from '@playwright/test';
import { FormComponent } from './Component/FormComponent';

// Representa a página completa do formulário.
// Responsabilidades: navegação, estado do browser (cookies) e composição dos componentes.
export class FormPage {

    // Expõe o componente para que o teste aceda aos seus métodos (ex: formPage.form.fillForm(...))
    readonly form: FormComponent;

    // `page` é guardado como privado porque só esta classe precisa de navegar ou limpar cookies.
    // O FormComponent recebe `page` apenas para criar os locators — não o guarda.
    constructor(private readonly page: Page) {
        this.form = new FormComponent(page);
    }

    async navigate() {
        await this.page.goto('.');
    }

    async clearCookies() {
        await this.page.context().clearCookies();
    }

    async setup() {
        await this.clearCookies();
        await this.navigate();
    }
}
