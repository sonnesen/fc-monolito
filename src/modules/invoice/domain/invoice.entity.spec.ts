import Id from "../../@shared/domain/value-object/id.value-object";
import Address from "./address.vo";
import InvoiceItem from "./invoice-item.entity";
import Invoice from "./invoice.entity";

describe('Invoice unit test', () => {
  it('should calculate the total', () => {
    const invoice = new Invoice({
      id: new Id('1'),
      name: 'John Doe',
      document: '12345678900',
      address: new Address({
        street: 'Street',
        number: '123',
        complement: 'Complement',
        city: 'City',
        state: 'State',
        country: 'Country',
        zipCode: '12345678',
      }),
      items: [
        new InvoiceItem({
          id: new Id('1'),
          name: 'Item 1',
          price: 10,
          quantity: 1,
        }),
        new InvoiceItem({
          id: new Id('2'),
          name: 'Item 2',
          price: 15,
          quantity: 2,
        }),
      ],
    });
    expect(invoice.total).toBe(40);
  });
});