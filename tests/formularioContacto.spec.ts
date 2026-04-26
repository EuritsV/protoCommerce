import { test } from '@playwright/test';
import { FormPage } from '../Pages/FormPage';
import { FormSubmissionValidator } from '../utils/Validator/formSubmitionValidator';

test.describe('Formulário de contacto do site protoCommerce', () => {

    // 2. DECLARAÇÃO — existem aqui para serem visíveis a todos os testes do describe.
    //    Ainda não têm valor: `page` só existe dentro de funções async do Playwright.
    let formPage: FormPage;
    let validator: FormSubmissionValidator;

    // 3. BEFORE — corre antes de cada teste.
    //    É aqui que `page` (fixture do Playwright) está disponível.
    //    Instancia os objetos e faz o setup da página (limpar cookies + navegar).
    test.beforeEach(async ({ page }) => {
        formPage  = new FormPage(page);
        validator = new FormSubmissionValidator(formPage.form);
        await formPage.setup();
    });

    // 4. TEST — um cenário por teste: Arrange → Act → Assert
    //    Arrange: já feito no beforeEach.
    //    Act:     preenche e submete o formulário.
    //    Assert:  valida o resultado esperado.
    test('Preencher formulário de contacto', async () => {
        await formPage.form.fillForm('João Silva', 'joao@email.com', 'senha123');
        await validator.validateSuccessfulSubmission();
    });

});
