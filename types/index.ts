export type Room =
   {
      id:string,
      price: number;
      rating: string | undefined;
      name: string;
      categoryId: string;
      details: string | null;
      imageUrl: string;
      createdAt: Date;
      updatedAt: Date;
    }
;
