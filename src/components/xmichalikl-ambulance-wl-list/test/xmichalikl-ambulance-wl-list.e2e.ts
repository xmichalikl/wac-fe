import { newE2EPage } from '@stencil/core/testing';

describe('xmichalikl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmichalikl-ambulance-wl-list></xmichalikl-ambulance-wl-list>');

    const element = await page.find('xmichalikl-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
