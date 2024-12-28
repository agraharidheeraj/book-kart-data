if (!books ) {
    return (
      <div className="my-10 max-w-3xl justify-center mx-auto">
  <NoData
  imageUrl="/images/no-book.jpg"
  message="You haven't sold any books yet."
  description="Start selling your books to reach potential buyers. List your first book now and make it available to others."
  onClick={() => router.push("/book-sell")}
  buttonText="Sell Your First Book"
/>
      </div>
    );
  }




  if (!user) {
    return (
      <NoData
        message="Please log in to access your cart."
        description="You need to be logged in to view your cart and checkout."
        buttonText="Login"
        imageUrl="/images/login.jpg"
        onClick={handleOpenLogin}
      />
    );
  }


  if (orders.length === 0 ) {
    return (
      <div className="my-10 max-w-3xl justify-center mx-auto">
  <NoData
  imageUrl="/images/no-book.jpg"
  message="You haven't order any books yet."
  description="Start order your books to reach potential buyers. order your first book now!"
  onClick={() => router.push("/books")}
  buttonText="Order Your First Book"
/>
      </div>
    );
  }


  if (!wishlistItems.length)
    return (
      <NoData
        message="Your wishlist is empty."
        description="Looks like you haven't added any items to your wishlist yet. 
             Browse our collection and save your favorites!"
        buttonText="Browse Books"
        imageUrl="/images/wishlist.webp"
        onClick={() => router.push("/books")}
      />
    );


    if (!book || isError) {
        return (
          <div className="my-10 max-w-3xl justify-center mx-auto">
            <NoData
              imageUrl="/images/no-book.jpg"
              message="Loading...."
              description="Wait, we are fetching book details"
              onClick={() => router.push("/book-sell")}
              buttonText="Sell Your First Book"
            />
          </div>
        );
      }


      <NoData
      imageUrl="/images/no-book.jpg"
      message="No books available please try later."
      description="Try adjusting your filters or search criteria to find what you're looking for."
      onClick={() => router.push("/book-sell")}
      buttonText="Shell Your First Book"
    />



    if (cart.items.length === 0) {
        return (
          <NoData
            message="Your cart is empty."
            description="Looks like you haven't added any items yet. 
            Explore our collection and find something you love!"
            buttonText="Browse Books"
            imageUrl="/images/cart.webp" 
            onClick={() => router.push('/books')}
          />
        );
      }