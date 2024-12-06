type Blog = {
  id: string; 
  title: string; 
  content: string; 
  category: string; 
  tags: string[]; 
  createdAt: Date; 
  updatedAt?: Date; 
};
export default Blog;