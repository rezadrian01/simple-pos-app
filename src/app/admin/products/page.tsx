
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Product Name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="0.00" />
            </div>
            <div className="grid gap-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Product Description" />
            </div>
            <div className="md:col-span-2">
              <Button>Add Product</Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Existing Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No products yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}
