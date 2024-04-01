import { newSpecPage } from '@stencil/core/testing';
import { XmichaliklAmbulanceWlList } from '../xmichalikl-ambulance-wl-list';

describe('xmichalikl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmichaliklAmbulanceWlList],
      html: `<xmichalikl-ambulance-wl-list></xmichalikl-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XmichaliklAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
