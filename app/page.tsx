import { GetCategories } from "@/actions/getCategories";
import { CategorySection } from "@/components/categories";
import { Hero } from "@/components/hero";


export default async function Home() {
  const categories = await GetCategories()
 
  return (
   <>
    <Hero/>
    <CategorySection  categories={categories}/>
   </>
  );
}
