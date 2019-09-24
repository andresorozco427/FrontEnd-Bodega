import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {  
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  var codigoC = {
    codigoContenedor: {
      codigo: "CQ0953",
      codigo2: "BR0192",
      codigo3: "UR0923",
      codigo4: "PR0201"
    }
  }

  it('ingreso contenedor perecedero', () => {
    const codigo = codigoC.codigoContenedor.codigo;
    const mercancia = "tomates";
    const color = "blanco";
    const peso = "9T";
    page.navigateTo('historialAlmacenamiento');
    element(by.id('codigo')).sendKeys(codigo);
    element(by.id('mercancia')).sendKeys(mercancia);
    element(by.id('siPerecedero')).click();
    element(by.id('color')).sendKeys(color);
    element(by.id('peso')).sendKeys(peso);
    element(by.buttonText('Crear')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigo} ha sido almacenado exitosamente`);
    });
  });

  it('salida contenedor perecedero', () => {
    page.navigateTo('historialAlmacenamiento');
    element(by.buttonText('Salida')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigoC.codigoContenedor.codigo} ha salido exitosamente, el valor a pagar es: $20000`);
    });
  });

  it('ingreso contenedor no perecedero y con valor agregado en el pago', () => {
    const codigo = codigoC.codigoContenedor.codigo2;
    const mercancia = "Zapatos";
    const color = "blanco";
    const peso = "4T";
    page.navigateTo('historialAlmacenamiento');
    element(by.id('codigo')).sendKeys(codigo);
    element(by.id('mercancia')).sendKeys(mercancia);
    element(by.id('noPerecedero')).click();
    element(by.id('color')).sendKeys(color);
    element(by.id('peso')).sendKeys(peso);
    element(by.buttonText('Crear')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigo} ha sido almacenado exitosamente`);
    });
  });

  it('salida contenedor no perecedero', () => {
    page.navigateTo('historialAlmacenamiento');
    element(by.buttonText('Salida')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigoC.codigoContenedor.codigo2} ha salido exitosamente, el valor a pagar es: $100000`);
    });
  });

  it('ingreso contenedor perecedero con valor agregado en el pago', () => {
    const codigo = codigoC.codigoContenedor.codigo3;
    const mercancia = "Peras";
    const color = "Azul";
    const peso = "70T";
    page.navigateTo('historialAlmacenamiento');
    element(by.id('codigo')).sendKeys(codigo);
    element(by.id('mercancia')).sendKeys(mercancia);
    element(by.id('siPerecedero')).click();
    element(by.id('color')).sendKeys(color);
    element(by.id('peso')).sendKeys(peso);
    element(by.buttonText('Crear')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigo} ha sido almacenado exitosamente`);
    });
  });

  it('salida contenedor no perecedero', () => {
    page.navigateTo('historialAlmacenamiento');
    element(by.buttonText('Salida')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigoC.codigoContenedor.codigo3} ha salido exitosamente, el valor a pagar es: $100000`);
    });
  });


  it('ingreso contenedor no perecedero', () => {
    const codigo = codigoC.codigoContenedor.codigo4;
    const mercancia = "Morrales";
    const color = "Negro";
    const peso = "2T";
    page.navigateTo('historialAlmacenamiento');
    element(by.id('codigo')).sendKeys(codigo);
    element(by.id('mercancia')).sendKeys(mercancia);
    element(by.id('noPerecedero')).click();
    element(by.id('color')).sendKeys(color);
    element(by.id('peso')).sendKeys(peso);
    element(by.buttonText('Crear')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigo} ha sido almacenado exitosamente`);
    });
  });  

  it('salida contenedor no perecedero', () => {
    page.navigateTo('historialAlmacenamiento');
    element(by.buttonText('Salida')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigoC.codigoContenedor.codigo4} ha salido exitosamente, el valor a pagar es: $20000`);
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
