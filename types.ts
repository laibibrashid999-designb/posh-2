export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  quantity?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  imageUrl: string;
  content: { type: 'paragraph' | 'heading'; text: string }[];
}
