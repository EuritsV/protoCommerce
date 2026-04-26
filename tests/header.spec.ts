import { test, expect } from "@playwright/test";
import { FormPage } from "../Pages/FormPage";
import { HeaderComponent } from "../Pages/Component/HeaderComponent";
import { HeaderValidator } from "../utils/Validator/headerValidator";

test.describe("Header Component", () => {
  let formPage: FormPage;
  let headerComponent: HeaderComponent;
  let headerValidator: HeaderValidator;

  test.beforeEach(async ({ page }) => {
    formPage = new FormPage(page);
    headerComponent = new HeaderComponent(page);
    headerValidator = new HeaderValidator(headerComponent);
    await formPage.setup();
  });
  test("should navigate to Home page when Home link is clicked", async () => {
    await headerComponent.navigateToHome();
    await headerValidator.validateHeaderLinks();
  });
  test("should navigate to Shop page when Shop link is clicked", async () => {
    await headerComponent.navigateToShop();
    await headerValidator.validateHeaderLinks();
  });
  test("should navigate to ProtoCommerce page when ProtoCommerce link is clicked", async () => {
    await headerComponent.navigateToProtoCommerce();
    await headerValidator.validateHeaderLinks();
  });
});
