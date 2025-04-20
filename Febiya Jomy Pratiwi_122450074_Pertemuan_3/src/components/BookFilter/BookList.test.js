import { render, screen } from "@testing-library/react";
import BookList from "./BookList";

describe("BookList", () => {
  const mockBooks = [
    {
      id: 1,
      title: "Test Book 1",
      author: "Author 1",
      status: "owned",
    },
    {
      id: 2,
      title: "Test Book 2",
      author: "Author 2",
      status: "reading",
    },
  ];

  test("renders list of books", () => {
    render(
      <BookList books={mockBooks} onEdit={() => {}} onDelete={() => {}} />
    );

    expect(screen.getByText("Test Book 1")).toBeInTheDocument();
    expect(screen.getByText("Penulis: Author 1")).toBeInTheDocument();
    expect(screen.getByText("Status: Dimiliki")).toBeInTheDocument();
    expect(screen.getByText("Test Book 2")).toBeInTheDocument();
  });

  test("shows message when no books", () => {
    render(<BookList books={[]} onEdit={() => {}} onDelete={() => {}} />);

    expect(
      screen.getByText("Tidak ada buku yang ditemukan")
    ).toBeInTheDocument();
  });
});
