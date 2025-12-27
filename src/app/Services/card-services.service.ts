import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardServicesService implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  USERS = [
    {
      id: 1,
      firstName: 'Satish',
      lastName: 'Mallidi',
      email: 'satish.mallidi@example.com',
      phone: '9876543210',
      role: 'Admin',
      status: 'Active',
      gender: 'Male',
      dateOfBirth: '1996-04-15',
      address: {
        street: 'Madhapur',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        pincode: '500081'
      },
      createdAt: '2024-01-10',
      lastLogin: '2025-01-02'
    },
    {
      id: 2,
      firstName: 'Anjali',
      lastName: 'Sharma',
      email: 'anjali.sharma@example.com',
      phone: '9123456789',
      role: 'User',
      status: 'Active',
      gender: 'Female',
      dateOfBirth: '1998-08-22',
      address: {
        street: 'Whitefield',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        pincode: '560066'
      },
      createdAt: '2024-02-05',
      lastLogin: '2025-01-15'
    },
    {
      id: 3,
      firstName: 'Rahul',
      lastName: 'Verma',
      email: 'rahul.verma@example.com',
      phone: '9988776655',
      role: 'Manager',
      status: 'Inactive',
      gender: 'Male',
      dateOfBirth: '1994-11-30',
      address: {
        street: 'Sector 62',
        city: 'Noida',
        state: 'Uttar Pradesh',
        country: 'India',
        pincode: '201301'
      },
      createdAt: '2023-11-18',
      lastLogin: '2024-12-10'
    },
    {
      id: 4,
      firstName: 'Priya',
      lastName: 'Iyer',
      email: 'priya.iyer@example.com',
      phone: '9012345678',
      role: 'User',
      status: 'Active',
      gender: 'Female',
      dateOfBirth: '2000-02-14',
      address: {
        street: 'Adyar',
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        pincode: '600020'
      },
      createdAt: '2024-03-12',
      lastLogin: '2025-01-20'
    }
  ];

  // PRODUCTS = [
  //   {
  //     categoryId: 1,
  //     categoryName: 'Electronics',
  //     items: [
  //       {
  //         id: 101,
  //         name: 'Smartphone',
  //         brand: 'Samsung',
  //         price: 24999,
  //         stock: 20,
  //         rating: 4.5,
  //         image: 'assets/images/electronics/mobile.jpg'
  //       },
  //       {
  //         id: 102,
  //         name: 'Laptop',
  //         brand: 'Dell',
  //         price: 55999,
  //         stock: 10,
  //         rating: 4.6,
  //         image: 'assets/images/electronics/laptop.jpg'
  //       },
  //       {
  //         id: 103,
  //         name: 'Bluetooth Headphones',
  //         brand: 'Boat',
  //         price: 2999,
  //         stock: 35,
  //         rating: 4.2,
  //         image: 'assets/images/electronics/headphones.jpg'
  //       },
  //       {
  //         id: 104,
  //         name: 'Smart Watch',
  //         brand: 'Noise',
  //         price: 4999,
  //         stock: 25,
  //         rating: 4.3,
  //         image: 'assets/images/electronics/watch.jpg'
  //       },
  //       {
  //         id: 105,
  //         name: 'Tablet',
  //         brand: 'Lenovo',
  //         price: 18999,
  //         stock: 12,
  //         rating: 4.4,
  //         image: 'assets/images/electronics/tablet.jpg'
  //       }
  //     ]
  //   },

  //   {
  //     categoryId: 2,
  //     categoryName: 'Fashion',
  //     items: [
  //       {
  //         id: 201,
  //         name: 'Men T-Shirt',
  //         brand: 'Puma',
  //         price: 999,
  //         stock: 50,
  //         rating: 4.1,
  //         image: 'https://via.placeholder.com/300x200?text=Cooking+Oil'
  //       },
  //       {
  //         id: 202,
  //         name: 'Women Kurti',
  //         brand: 'Biba',
  //         price: 1499,
  //         stock: 30,
  //         rating: 4.4,
  //         image: 'assets/images/fashion/kurti.jpg'
  //       },
  //       {
  //         id: 203,
  //         name: 'Jeans',
  //         brand: 'Levis',
  //         price: 2999,
  //         stock: 40,
  //         rating: 4.5,
  //         image: 'assets/images/fashion/jeans.jpg'
  //       },
  //       {
  //         id: 204,
  //         name: 'Sneakers',
  //         brand: 'Nike',
  //         price: 4999,
  //         stock: 18,
  //         rating: 4.6,
  //         image: 'assets/images/fashion/shoes.jpg'
  //       },
  //       {
  //         id: 205,
  //         name: 'Handbag',
  //         brand: 'Caprese',
  //         price: 3499,
  //         stock: 15,
  //         rating: 4.3,
  //         image: 'assets/images/fashion/handbag.jpg'
  //       }
  //     ]
  //   },

  //   {
  //     categoryId: 3,
  //     categoryName: 'Groceries',
  //     items: [
  //       {
  //         id: 301,
  //         name: 'Basmati Rice',
  //         brand: 'India Gate',
  //         price: 1200,
  //         stock: 100,
  //         rating: 4.7,
  //         image: 'assets/images/groceries/rice.jpg'
  //       },
  //       {
  //         id: 302,
  //         name: 'Cooking Oil',
  //         brand: 'Fortune',
  //         price: 799,
  //         stock: 60,
  //         rating: 4.4,
  //         image: 'assets/images/groceries/oil.jpg'
  //       },
  //       {
  //         id: 303,
  //         name: 'Sugar',
  //         brand: 'Dhampur',
  //         price: 280,
  //         stock: 80,
  //         rating: 4.2,
  //         image: 'assets/images/groceries/sugar.jpg'
  //       },
  //       {
  //         id: 304,
  //         name: 'Wheat Flour',
  //         brand: 'Aashirvaad',
  //         price: 499,
  //         stock: 90,
  //         rating: 4.6,
  //         image: 'assets/images/groceries/flour.jpg'
  //       },
  //       {
  //         id: 305,
  //         name: 'Tea Powder',
  //         brand: 'Tata Tea',
  //         price: 450,
  //         stock: 70,
  //         rating: 4.5,
  //         image: 'assets/images/groceries/tea.jpg'
  //       }
  //     ]
  //   }
  // ];

  PRODUCTS = [
    {
      categoryId: 1,
      categoryName: 'Electronics',
      items: [
        {
          id: 101,
          name: 'Smartphone',
          brand: 'Samsung',
          price: 24999,
          stock: 20,
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format'
        },
        {
          id: 102,
          name: 'Laptop',
          brand: 'Dell',
          price: 55999,
          stock: 10,
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format'
        },
        {
          id: 103,
          name: 'Bluetooth Headphones',
          brand: 'Boat',
          price: 2999,
          stock: 35,
          rating: 4.2,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format'
        },
        {
          id: 104,
          name: 'Smart Watch',
          brand: 'Noise',
          price: 4999,
          stock: 25,
          rating: 4.3,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format'
        },
        {
          id: 105,
          name: 'Tablet',
          brand: 'Lenovo',
          price: 18999,
          stock: 12,
          rating: 4.4,
          image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format'
        }
      ]
    },
    {
      categoryId: 2,
      categoryName: 'Fashion',
      items: [
        {
          id: 201,
          name: 'Men T-Shirt',
          brand: 'Puma',
          price: 999,
          stock: 50,
          rating: 4.1,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format'
        },
        {
          id: 202,
          name: 'Women Kurti',
          brand: 'Biba',
          price: 1499,
          stock: 30,
          rating: 4.4,
          image: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?w=500&auto=format'
        },
        {
          id: 203,
          name: 'Jeans',
          brand: 'Levis',
          price: 2999,
          stock: 40,
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format'
        },
        {
          id: 204,
          name: 'Sneakers',
          brand: 'Nike',
          price: 4999,
          stock: 18,
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format'
        },
        {
          id: 205,
          name: 'Handbag',
          brand: 'Caprese',
          price: 3499,
          stock: 15,
          rating: 4.3,
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format'
        }
      ]
    },
    {
      categoryId: 3,
      categoryName: 'Groceries',
      items: [
        {
          id: 301,
          name: 'Basmati Rice',
          brand: 'India Gate',
          price: 1200,
          stock: 100,
          rating: 4.7,
          // Verified Wikimedia direct link for Basmati
          image: 'https://images.unsplash.com/photo-1586201327693-86619dadb241?auto=format&fit=crop&q=80&w=800'
        },
        {
          id: 302,
          name: 'Cooking Oil',
          brand: 'Fortune',
          price: 799,
          stock: 60,
          rating: 4.4,
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=500'
        },
        {
          id: 303,
          name: 'Sugar',
          brand: 'Dhampur',
          price: 280,
          stock: 80,
          rating: 4.2,
          image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=500'
        },
        {
          id: 304,
          name: 'Wheat Flour',
          brand: 'Aashirvaad',
          price: 499,
          stock: 90,
          rating: 4.6,
          // Updated robust Flour link
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=500'
        },
        {
          id: 305,
          name: 'Tea Powder',
          brand: 'Tata Tea',
          price: 450,
          stock: 70,
          rating: 4.5,
          // Verified Wikimedia direct link for Tea
          image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d7?auto=format&fit=crop&q=80&w=800'
        }
      ]
    }
  ];
}
