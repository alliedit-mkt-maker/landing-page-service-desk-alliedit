import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { PRODUCT_FORMS } from "./product-forms";

const expect = (actual: string) => ({
  toBe: (expected: string) => assert.equal(actual, expected),
});

describe("institutional product form assignments", () => {
  test("Videoconferência keeps its page form and product", () => {
    expect(PRODUCT_FORMS.videoconferencia.formId).toBe("0b0c7bb4-c1d3-4660-9afb-764dcd4f0269");
    expect(PRODUCT_FORMS.videoconferencia.product).toBe("Videoconferência");
  });
  test("Headsets keeps its page form and product", () => {
    expect(PRODUCT_FORMS.headsets.formId).toBe("c1683423-b13f-4a72-b12a-f2f151ccd3a4");
    expect(PRODUCT_FORMS.headsets.product).toBe("Headsets");
  });
  test("Microsoft 365 keeps its page form and product", () => {
    expect(PRODUCT_FORMS.microsoft365.formId).toBe("b032112e-cd9e-4af7-a157-25ef619c2a79");
    expect(PRODUCT_FORMS.microsoft365.product).toBe("Microsoft 365");
  });
  test("AWS keeps its page form and product", () => {
    expect(PRODUCT_FORMS.aws.formId).toBe("4a305e47-1445-40f2-b9c4-b1beb6850c1e");
    expect(PRODUCT_FORMS.aws.product).toBe("AWS");
  });
  test("Firewall keeps its page form and product", () => {
    expect(PRODUCT_FORMS.firewall.formId).toBe("164db0e1-44bd-4a9b-8b62-80f0d111471b");
    expect(PRODUCT_FORMS.firewall.product).toBe("Firewall");
  });
});