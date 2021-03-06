import React from "react";
import { MemoryRouter } from "react-router-dom"
import { render, screen } from '../../testUtils';
import Page from "./Page";
import { About, Blog, Client, Contact, Home, Login, News, Offer } from '../pages';

jest.mock('../pages/About', () => jest.fn());
jest.mock('../pages/Blog', () => jest.fn());
jest.mock('../pages/Client', () => jest.fn());
jest.mock('../pages/Contact', () => jest.fn());
jest.mock('../pages/Home', () => jest.fn());
jest.mock('../pages/Login', () => jest.fn());
jest.mock('../pages/News', () => jest.fn());
jest.mock('../pages/Offer', () => jest.fn());

describe("Page", () => {

  test.each([
    ['/about', About],
    ['/blog', Blog],
    ['/client', Client],
    ['/contact', Contact],
    ['/', Home],
    ['/login', Login],
    ['/news', News],
    ['/offer', Offer]
  ])('with valid path: "%s" should redirect to %p page.', (link, component) => {
    component.mockImplementation(() => <div data-testid={component.name}>{component.name}</div>);

    render(
      <MemoryRouter initialEntries={[link]}>
        <Page />
      </MemoryRouter>
    );

    expect(screen.queryByText(`${component.name}`)).toBeInTheDocument();
    expect(screen.queryByTestId(`${component.name}`)).toBeInTheDocument();
    expect(screen.queryByTestId("randomId1234")).not.toBeInTheDocument();
  })

  test.each([
    ['/about123', About],
    ['/blog1', Blog],
    ['/client3', Client],
    ['/contact4', Contact],
    ['/fafa', Contact],
    ['/loginda', Login],
    ['/newsfa', News],
    ['/offerf', Offer]
  ])('with invalid path: "%s" should redirect to Home page.', (link, component) => {
    Home.mockImplementation(() => <div data-testid="home">Home</div>);
    component.mockImplementation(() => <div data-testid={component.name}>{component.name}</div>);

    render(
      <MemoryRouter initialEntries={[link]}>
        <Page />
      </MemoryRouter>
    );

    expect(screen.queryByText("Home")).toBeInTheDocument();
    expect(screen.queryByTestId("home")).toBeInTheDocument();
    expect(screen.queryByTestId(`${component.name}`)).toBeFalsy();
  })

  test('contains div with data-testid main-container', () => {
    Home.mockImplementation(() => <div data-testid="home">Home</div>);

    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('main-container')).toBeInTheDocument();
  })
});