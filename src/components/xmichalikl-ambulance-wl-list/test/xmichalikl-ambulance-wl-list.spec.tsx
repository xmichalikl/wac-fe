import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklAmbulanceWlList } from '../xmichalikl-ambulance-wl-list';

describe('xmichalikl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklAmbulanceWlList],
      html: `<xmichalikl-ambulance-wl-list></xmichalikl-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xmichalikl-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmichalikl-ambulance-wl-list>
    `);
  });
});
