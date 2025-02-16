"use client"
import Components from "atomic-uds-next-app"

const{ Button, Input, Switch }=Components

export default function Home() {
  return (
    <div className=" bg-green-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Button variant="default" size="lg" >Click Me</Button>
     <Input value={""} name={"user"} showIcon={true} placeholder="enter you name..." type={"password"} onChange={(e)=>console.log(e)}/>
     <Switch checked={false} noBackground/>
     <Button variant="pill-outline">Pill Outline</Button>
   
      <Button size="xs">Extra Small</Button>
      <Button size="lg">Large</Button>
      <Button rounded="full">Rounded Full</Button>
      <Button disabled>Disabled</Button>
    
      <Button variant="link">Internal CustomLink</Button>
      <Button variant="link" href="https://example.com" target="_blank"  iconPosition="right" underlineHover={true}>
        External CustomLink
      </Button>
 
    </div>



  );
}
