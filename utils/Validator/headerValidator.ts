import { expect } from "@playwright/test";
import { HeaderComponent } from "../../Pages/Component/HeaderComponent";

export class HeaderValidator {  
    constructor(private readonly headerComponent: HeaderComponent) {}

    async validateHeaderLinks() {
        await expect(this.headerComponent.protoCommerceLink).toBeVisible();
        await expect(this.headerComponent.homeLink).toBeVisible();
        await expect(this.headerComponent.shopLink).toBeVisible();
    }
}