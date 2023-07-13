'use client';

import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  return (
    <Footer container>
      <Footer.Copyright
        by="AlviansMaulana™"
        href="https://github.com/alviansm/frontend-iot-mms"
        year={2023}
        target="_blank"
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://www.instagram.com/smico.id/" target='_blank'>
          Media PKM KC 2023
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}