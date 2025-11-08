
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Product Description</p>
        <p className="font-bold">$9.99</p>
      </CardContent>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
