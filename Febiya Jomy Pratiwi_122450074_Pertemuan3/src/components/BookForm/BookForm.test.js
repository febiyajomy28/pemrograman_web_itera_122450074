import { render, screen, fireEvent } from "@testing-library/react";
import BookForm from "./BookForm";

describe("BookForm", () => {
  const mockSubmit = jest.fn();

  test("renders form with all fields", () => {
    render(<BookForm onSubmit={mockSubmit} />);

    expect(screen.getByLabelText("Judul Buku")).toBeInTheDocument();
    expect(screen.getByLabelText("Penulis")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
    expect(screen.getByText("Tambah Buku")).toBeInTheDocument();
  });

  test("shows error when submitting empty form", () => {
    render(<BookForm onSubmit={mockSubmit} />);

    fireEvent.click(screen.getByText("Tambah Buku"));
    expect(
      screen.getByText("Judul buku tidak boleh kosong")
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("calls onSubmit with correct data", () => {
    render(<BookForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText("Judul Buku"), {
      target: { value: "Test Book" },
    });
    fireEvent.change(screen.getByLabelText("Penulis"), {
      target: { value: "Test Author" },
    });
    fireEvent.click(screen.getByText("Tambah Buku"));

    expect(mockSubmit).toHaveBeenCalledWith({
      title: "Test Book",
      author: "Test Author",
      status: "owned",
    });
  });
});
