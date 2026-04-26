import { type Page, type Locator } from '@playwright/test';

export class FormComponent {

    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly checkboxInput: Locator;
    readonly selectInput: Locator;
    readonly radioInput: Locator;
    readonly calendarInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.nameInput     = page.locator('form input[name="name"]');
        this.emailInput    = page.locator('input[name="email"]');
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.checkboxInput = page.getByRole('checkbox', { name: 'Check me out if you Love' });
        this.selectInput   = page.getByLabel('Gender');
        this.radioInput    = page.getByLabel('Student');
        this.calendarInput = page.locator('input[name="bday"]');
        this.submitButton  = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.getByText('The Form has been submitted successfully!');
    }

    async fillForm(name: string, email: string, password: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.checkboxInput.check();
        await this.selectInput.selectOption('Female');
        await this.radioInput.check();
        await this.calendarInput.fill('1999-01-01');
        await this.submitButton.click();
    }
}
