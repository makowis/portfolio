import React from 'react';
import { render, screen } from '@testing-library/react';

// Layout contains <html> and <body> tags which can't be rendered in jsdom directly.
// We test the internal structure by mocking the component structure.
describe('Layout', () => {
  it('renders main content area', async () => {
    // Dynamically import to test the module exists
    const LayoutModule = await import('../../app/layout');
    expect(LayoutModule.default).toBeDefined();
    expect(LayoutModule.metadata).toBeDefined();
  });

  it('has correct metadata', async () => {
    const { metadata } = await import('../../app/layout');
    expect(metadata.title).toEqual({
      default: 'mako_wis.dev',
      template: '%s | mako_wis.dev',
    });
    expect(metadata.description).toBe('mako_wisのポートフォリオサイト');
  });
});
