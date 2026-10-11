import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

function navigate(hash) {
  window.history.pushState(null, '', hash);
  fireEvent(window, new Event('hashchange'));
}

function expectAllHomeSections() {
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'ABOUT OUR PRACTICE' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Meet the Team' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /let.s connect/i })).toBeInTheDocument();
}

test('Home shows every section for visitors to scroll through', () => {
  render(<App />);
  expectAllHomeSections();
  expect(screen.queryByRole('link', { name: 'Meet their team' })).not.toBeInTheDocument();
});

test('the Connected Kid section appears only in Teams, immediately before the footer', () => {
  render(<App />);
  navigate('#team');
  const partner = screen.getByRole('region', { name: 'Meet our office partners The Connected Kid' });
  const footer = screen.getByRole('contentinfo');
  expect(partner.nextElementSibling).toBe(footer);
  expect(screen.getByAltText('The Connected Kid logo')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Meet their team' })).toHaveAttribute('href', 'https://www.theconnectedkid.com/team');
  for (const hash of ['#home', '#service', '#contact']) {
    navigate(hash);
    expect(screen.queryByRole('link', { name: 'Meet their team' })).not.toBeInTheDocument();
  }
});

test('Services shows only service content, with teams and contact in their own views', () => {
  render(<App />);
  navigate('#service');
  expect(screen.queryByRole('link', { name: 'Meet their team' })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'ABOUT OUR PRACTICE' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Meet the Team' })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /let.s connect/i })).not.toBeInTheDocument();

  navigate('#team');
  expect(screen.getByRole('heading', { name: 'Meet the Team' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'ABOUT OUR PRACTICE' })).not.toBeInTheDocument();

  navigate('#contact');
  expect(screen.getByRole('heading', { name: /let.s connect/i })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Meet the Team' })).not.toBeInTheDocument();

  navigate('#home');
  expectAllHomeSections();
});

test('direct Services links work and the skip link preserves the current view', () => {
  window.history.replaceState(null, '', '/#service');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'ABOUT OUR PRACTICE' })).toBeInTheDocument();
  navigate('#main-content');
  expect(screen.getByRole('heading', { name: 'ABOUT OUR PRACTICE' })).toBeInTheDocument();
});
