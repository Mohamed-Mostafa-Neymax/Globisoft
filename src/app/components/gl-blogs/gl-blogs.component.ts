import { Component, Input } from '@angular/core';

interface Blog {
  id: string;
  imagePath: string,
  title: string,
  description: string,
}

@Component({
  selector: 'app-gl-blogs',
  templateUrl: './gl-blogs.component.html',
  styleUrls: ['./gl-blogs.component.scss']
})
export class GlBlogsComponent {
  @Input() allBlogs!: boolean;

  blogs: Blog[] = [
    {
      id: crypto.randomUUID(),
      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      id: crypto.randomUUID(),

      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    }
  ];

  getBlogs() {
    return this.allBlogs ? this.blogs : this.blogs.slice(0, 3);
  }

}
