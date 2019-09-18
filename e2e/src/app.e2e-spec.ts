import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('ingreso contenedor perecedero', () => {
    const codigo = generarCodigosDelContenedor();
    const mercancia = "tomates";
    const perecedero = "true";
    const color = "blanco";
    const peso = "9T";
    page.navigateTo('historialAlmacenamiento');
    element(by.model('contenedor.codigo')).sendKeys(codigo);
    element(by.model('contenedor.mercancia')).sendKeys(mercancia);
    element(by.model('contenedor.perecedero')).sendKeys(perecedero);
    element(by.model('contenedor.color')).sendKeys(color);
    element(by.model('contenedor.peso')).sendKeys(peso);
    element(by.buttonText('Crear')).click().then(()=> {
      expect(element(by.id("swal2-content")).getText() as Promise<string>).toEqual(`El contenedor con codigo: ${codigo} ha sido almacenado exitosamente`);
    });
  });

  function generarCodigosDelContenedor() {    
    var numeroAleatorios = (Math.floor(Math.random() * 90) + 1000); 
    var letrasAleatorias = (Math.random().toString(36).substr(2,2).toUpperCase());
   var concatenarNumerosPlaca= letrasAleatorias+numeroAleatorios;
   return concatenarNumerosPlaca;  
 }

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
