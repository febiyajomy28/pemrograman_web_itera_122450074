import { render, screen, fireEvent } from "@testing-library/react";
import BookFilter from "./BookFilter";

describe("BookFilter", () => {
  const mockFilter = jest.fn();
  const mockSearch = jest.fn();

  test("renders filter controls", () => {
    render(<BookFilter onFilter={mockFilter} onSearch={mockSearch} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Cari buku atau penulis...")
    ).toBeInTheDocument();
  });

  test("calls onFilter when select changes", () => {
    render(<BookFilter onFilter={mockFilter} onSearch={mockSearch} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "reading" },
    });
    expect(mockFilter).toHaveBeenCalledWith("reading");
  });

  test("calls onSearch when input changes", () => {
    render(<BookFilter onFilter={mockFilter} onSearch={mockSearch} />);

    fireEvent.change(screen.getByPlaceholderText("Cari buku atau penulis..."), {
      target: { value: "test" },
    });
    expect(mockSearch).toHaveBeenCalledWith("test");
  });
});
