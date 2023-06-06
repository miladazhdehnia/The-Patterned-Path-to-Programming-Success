class Post {
    constructor() {
      this.image = null;
      this.caption = null;
      this.location = null;
      this.tags = [];
    }
  }
  
  class PostBuilder {
    constructor() {
      this.post = new Post();
    }
  
    withImage(image) {
      this.post.image = image;
      return this;
    }
  
    withCaption(caption) {
      this.post.caption = caption;
      return this;
    }
  
    withLocation(location) {
      this.post.location = location;
      return this;
    }
  
    withTag(tag) {
      this.post.tags.push(tag);
      return this;
    }
  
    build() {
      return this.post;
    }
  }
  
  const post = new PostBuilder()
    .withImage('beautiful-sunset.jpg')
    .withCaption("I don't always post sunset pics, but when I do, they're spectacular!")
    .withLocation('Somewhere over the rainbow')
    .withTag('#sunset')
    .build();
  
  console.log(post);