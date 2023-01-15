import {render, screen} from '@testing-library/react'
import {ArticlePaper} from "@/components/ArticlePaper/ArticlePaper";
import {INews} from '@/types/INews';

describe('DateParser test', () => {
  let mockArticle: INews
  beforeEach(() => {
    mockArticle = {
      id: 123,
      title: 'Test title',
      summary: 'Test summary',
      publishedAt: '2021-01-01T00:00:00.000Z',
      imageUrl: 'https://example.com/image.jpg',
      featured: true, url: '', newsSite: '', launches: [], events: []
    }
  })

  test('ArticlePaper should display article info', () => {
    render(<ArticlePaper article={mockArticle} />);
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Test summary')).toBeInTheDocument();
    expect(screen.getByText('January 1, 2021')).toBeInTheDocument();
    expect(screen.getByText('Read more')).toBeInTheDocument();
    expect(screen.getByAltText('image')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

})
