import { Component } from '@angular/core';

interface Blog {
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

  blogs: Blog[] = [
    {
      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-2.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-1.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    },
    {
      imagePath: '/assets/images/blogs/blog-3.png',
      title: 'Couldn’t Help But Splurge On These Epic Fall Finds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.'
    }
  ];

  handlePageEvent(event: any) {
    console.log('paginated Event : ', event);
    
  }
}
