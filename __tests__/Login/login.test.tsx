import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/(auth-pages)/sign-in/page";
import { Message } from "@/components/form-message";
import userEvent from "@testing-library/user-event";

// Mock supabase server client
jest.mock("@/utils/supabase/server", () => ({
  createClient: jest.fn(() => ({
    auth: {
      signInWithPassword: jest.fn(() => ({
        data: null,
        error: null,
      })),
    },
  })),
}));

jest.mock("next/headers", () => ({
  headers: jest.fn(() => new Map()),
  cookies: jest.fn(() => new Map()),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Login Form", () => {
  it("renders an async component", async () => {
    render(await Login({ searchParams: {} as Promise<Message> }));
  });

  it("handles form submission", async () => {
    // Arrange
    const supabaseServer = require("../../utils/supabase/server");
    const nextNavigation = require("next/navigation");
    const submitButton = screen.getByTestId("login-submit-button");
    const user = userEvent.setup();

    // Act
    await user.type(screen.getByTestId("login-email"), "test@example.com");
    await user.type(screen.getByTestId("login-password"), "password123");
    await user.click(submitButton);

    // Assert
    expect(supabaseServer.createClient).toHaveBeenCalled();
    expect(nextNavigation.redirect).toHaveBeenCalledWith("/protected");
  });
});
