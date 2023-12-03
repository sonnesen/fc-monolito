import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import InvoiceFacadeInterface, { FindInvoiceFacadeOutputDTO, GenerateInvoiceFacadeInputDTO, GenerateInvoiceFacadeOutputDTO } from "./invoice.facade.interfase";

export default class InvoiceFacade implements InvoiceFacadeInterface {
  constructor(
    private _generateInvoiceUseCase: UseCaseInterface,
    private _findInvoiceUseCase: UseCaseInterface
  ) { }

  async generate(invoice: GenerateInvoiceFacadeInputDTO): Promise<GenerateInvoiceFacadeOutputDTO> {
    return await this._generateInvoiceUseCase.execute(invoice);
  }

  async find(invoiceId: string): Promise<FindInvoiceFacadeOutputDTO> {
    return await this._findInvoiceUseCase.execute({ id: invoiceId });
  }
}