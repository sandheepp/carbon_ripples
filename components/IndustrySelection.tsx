import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ShirtIcon as TShirt, SunIcon, Recycle } from 'lucide-react'

type Industry = 'Apparel' | 'Solar Panel Manufacturing' | 'Plastics' | null

interface IndustrySelectionProps {
  industry: Industry
  setIndustry: (industry: Industry) => void
}

export function IndustrySelection({ industry, setIndustry }: IndustrySelectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-800">Industry Selection</h2>
      <RadioGroup value={industry || ''} onValueChange={(value) => setIndustry(value as Industry)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <IndustryCard
            value="Apparel"
            icon={<TShirt className="h-8 w-8" />}
            bgColor="bg-blue-100"
            borderColor="border-blue-300"
            textColor="text-blue-800"
          />
          <IndustryCard
            value="Solar Panel Manufacturing"
            icon={<SunIcon className="h-8 w-8" />}
            bgColor="bg-yellow-100"
            borderColor="border-yellow-300"
            textColor="text-yellow-800"
          />
          <IndustryCard
            value="Plastics"
            icon={<Recycle className="h-8 w-8" />}
            bgColor="bg-green-100"
            borderColor="border-green-300"
            textColor="text-green-800"
          />
        </div>
      </RadioGroup>
    </div>
  )
}

interface IndustryCardProps {
  value: string
  icon: React.ReactNode
  bgColor: string
  borderColor: string
  textColor: string
}

function IndustryCard({ value, icon, bgColor, borderColor, textColor }: IndustryCardProps) {
  return (
    <div className={`flex items-center space-x-2 p-4 rounded-md ${bgColor} ${borderColor} border-2 transition-all hover:shadow-md [&:has(:checked)]:ring-2 [&:has(:checked)]:ring-green-500 [&:has(:checked)]:ring-offset-2`}>
      <RadioGroupItem value={value} id={value.toLowerCase().replace(/ /g, '-')} className="sr-only" />
      <Label
        htmlFor={value.toLowerCase().replace(/ /g, '-')}
        className={`flex items-center space-x-3 cursor-pointer ${textColor} w-full`}
      >
        {icon}
        <span className="font-medium">{value}</span>
      </Label>
    </div>
  )
}

