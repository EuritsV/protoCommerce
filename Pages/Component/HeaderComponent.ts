import {type Locator, type Page } from '@playwright/test';

export class HeaderComponent {

    readonly protoCommerceLink: Locator;
    readonly homeLink: Locator;
    readonly shopLink: Locator;
    readonly protractorTutorialHeading: Locator;
    readonly demoEcommerceHeading: Locator

    constructor(page: Page) {
        this.protoCommerceLink = page.getByRole('link', { name: 'ProtoCommerce', exact: true });
        this.homeLink = page.getByRole('link', { name: 'Home ', exact: true });
        this.shopLink = page.getByRole('link', { name: 'Shop' });
        this.protractorTutorialHeading = page.getByRole('heading', { name: 'Protractor Tutorial' });
        this.demoEcommerceHeading = page.getByRole('heading', { name: 'This is a demo eCommerce web' });      
}

async navigateToHome() {
    await this.homeLink.click();
}
async navigateToShop() {
    await this.shopLink.click();
}   
async navigateToProtoCommerce() {
    await this.protoCommerceLink.click();
}   
} 