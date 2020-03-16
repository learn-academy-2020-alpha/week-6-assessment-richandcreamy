# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) 
class BlogPostsController < ApplicationController
  def index
    # 2) This definition is for our index page and it will display all blog posts from our database.
    @posts = BlogPost.all
  end

  def show
    # 3) This definition allows for us to show blog posts based on their id paramater.
    @post = BlogPost.find(params[:id])
  end

  # 4)
  def new
  end

  def create
    # 5) This definition is for creating a new blog post with the expected blog paramaters. It will show the blog post page if the a blog post is sucessfully written to the database. Otherwise, the same page (/new) will be rendered on the page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) On failure to delete the post, redirect to /post.
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Everything below line 45 are private and can only be called within the class it is defined.
  private
  def blog_post_params
    # 8) The required paramaters for blog_post are :title and :content. Blog_post is also permitted to use :title and :content. These permissions are set from within being private.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)  This creates the BlogPost model.
class BlogPost < ApplicationRecord
  # 10) The database relationship of BlogPost is that it has many comments.
  has_many :comments
end
