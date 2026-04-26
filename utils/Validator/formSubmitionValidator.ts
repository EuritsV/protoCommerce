import { expect } from "@playwright/test";
//import { FormPage } from "../Pages/FormPage";
import { FormComponent } from "../../Pages/Component/FormComponent";

export class FormSubmissionValidator {

    constructor(private readonly formPage: FormComponent) {} 


    async validateSuccessfulSubmission() {
        await expect(this.formPage.successMessage).toBeVisible();
    }


}  