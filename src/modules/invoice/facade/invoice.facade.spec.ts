import { Sequelize } from "sequelize-typescript";
import InvoiceFacadeFactory from "../factory/invoice.facade.factory";
import InvoiceItemModel from "../repository/invoice-item.model";
import { InvoiceModel } from "../repository/invoice.model";

describe("InvoiceFacade test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([InvoiceModel, InvoiceItemModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a invoice", async () => {
    const input = {
      name: "Invoice test",
      document: "123456789",
      street: "street",
      number: "123",
      complement: "complement",
      city: "city",
      state: "state",
      country: "country",
      zipCode: "12345678",
      items: [
        {
          name: "item 1",
          price: 10,
          quantity: 1,
        },
        {
          name: "item 2",
          price: 20,
          quantity: 2,
        },
      ],
    };

    const facade = InvoiceFacadeFactory.create();

    const output = await facade.generate(input);

    expect(output).toBeDefined();
    expect(output.id).toBeDefined();
    expect(output.name).toBe(input.name);
    expect(output.document).toBe(input.document);
    expect(output.street).toBe(input.street);
    expect(output.number).toBe(input.number);
    expect(output.complement).toBe(input.complement);
    expect(output.city).toBe(input.city);
    expect(output.state).toBe(input.state);
    expect(output.country).toBe(input.country);
    expect(output.zipCode).toBe(input.zipCode);
    expect(output.items.length).toBe(input.items.length);
    expect(output.total).toBe(50);
  });

  it("should find a invoice", async () => {
    const input = {
      id: "1",
      name: "Invoice test",
      document: "123456789",
      street: "street",
      number: "123",
      complement: "complement",
      city: "city",
      state: "state",
      country: "country",
      zipCode: "12345678",
      items: [
        {
          id: "1",
          name: "item 1",
          price: 10,
          quantity: 1,
        },
        {
          id: "2",
          name: "item 2",
          price: 20,
          quantity: 2,
        },
      ],
    };

    const facade = InvoiceFacadeFactory.create();
    const output = await facade.generate(input);
    const found = await facade.find(output.id);

    expect(found).toBeDefined();
    expect(found.id).toBeDefined();
    expect(found.name).toBe(input.name);
    expect(found.document).toBe(input.document);
    expect(found.address.street).toBe(input.street);
    expect(found.address.number).toBe(input.number);
    expect(found.address.complement).toBe(input.complement);
    expect(found.address.city).toBe(input.city);
    expect(found.address.state).toBe(input.state);
    expect(found.address.country).toBe(input.country);
    expect(found.address.zipCode).toBe(input.zipCode);
    expect(found.items.length).toBe(input.items.length);
    expect(found.total).toBe(50);
  });
});