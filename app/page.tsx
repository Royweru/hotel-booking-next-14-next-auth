import { GetCategories } from "@/actions/getCategories";
import { CategorySection } from "@/components/categories";
import { Hero } from "@/components/hero";
import { Reviews } from "../components/review";
import { Footer } from "../components/footer";
import { serverUser } from "@/lib/serveruser";



export default async function Home() {
  const categories = await GetCategories()
  const user = await serverUser()
  return (
   <>
    <Hero/>
    <CategorySection  categories={categories}/>
    <Reviews user={user}/>
    <Footer />
   </>
  );
}
