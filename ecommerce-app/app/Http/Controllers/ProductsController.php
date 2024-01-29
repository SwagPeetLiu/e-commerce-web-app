<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;

class ProductsController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate the incoming request data
            $request->validate([
                'name' => 'required|string',
                'code' => 'nullable|string',
                'color' => 'required|string',
                'size' => 'required|string',
                'price' => 'required|numeric',
                'descriptions' => 'nullable|string',
            ]);

            // Create a new product using the current user's identity
            $product = Product::create($request->all());
            $user = Auth::user();
            $user->products()->save($product);

            // Return a response, you might return the created product or a success message
            return response()->json($product, 201);

        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 400);
        }
    }
    public function post(){
        return json(["result"=> "connected"]);
    }
}
