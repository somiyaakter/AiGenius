interface EmptyProps {
  label: string;
}

export default function Empty({ label }: EmptyProps) {
  return (
    <div className="h-full p-20 flex items-center justify-center">
      <div className="text-center">
        {/* <div className="relative h-72 w-72 mx-auto mb-8">
          <Image
            src="/logo.png"
            alt="Empty"
            fill
            className="object-contain opacity-80 grayscale"
          />
        </div> */}

        
        <p className="text-muted-foreground text-sm text-center">
          {label}
        </p>
      </div>
    </div>
  );
}