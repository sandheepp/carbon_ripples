import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Scope = 'Scope 1' | 'Scope 2' | 'Scope 3'

interface CommonDataSectionProps {
  scopes: Scope[]
  formData: Record<string, any>
  setFormData: (data: Record<string, any>) => void
}

export function CommonDataSection({ scopes, formData, setFormData }: CommonDataSectionProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-green-800">Common Data</h2>
      <div className="space-y-4 bg-green-50 p-6 rounded-lg border border-green-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            label="Energy Consumption - Electricity Usage"
            name="electricity"
            type="number"
            unit="kWh/year"
            tooltip="Enter total annual electricity usage from all on-site sources."
            value={formData.electricity}
            onChange={handleInputChange}
          />

          {scopes.includes('Scope 1') && (
            <FormField
              label="On-Site Fuel Combustion"
              name="fuelCombustion"
              type="number"
              unit="m³ or liters"
              tooltip="Fuel used for heating, boilers, or machinery. Specify volumes and fuel types."
              value={formData.fuelCombustion}
              onChange={handleInputChange}
            />
          )}

          <FormField
            label="Waste & Disposal"
            name="wasteDisposal"
            type="number"
            unit="tons/year"
            tooltip="Specify total process waste and how it is managed. Different disposal methods have different emission factors."
            value={formData.wasteDisposal}
            onChange={handleInputChange}
          />

          <FormField
            label="Employee Commuting - Average Distance"
            name="employeeCommutingDistance"
            type="number"
            unit="km/day"
            tooltip="Enter average commuting distance per employee per day."
            value={formData.employeeCommutingDistance}
            onChange={handleInputChange}
          />

          <FormField
            label="Number of Employees"
            name="numberOfEmployees"
            type="number"
            tooltip="Enter the total number of employees."
            value={formData.numberOfEmployees}
            onChange={handleInputChange}
          />
        </div>

        {scopes.includes('Scope 3') && (
          <div className="space-y-2">
            <Label htmlFor="rawMaterials" className="text-green-800">General Raw Materials</Label>
            <div className="flex space-x-2">
              <Input
                id="rawMaterials"
                name="rawMaterials"
                type="text"
                placeholder="Material name"
                value={formData.rawMaterials || ''}
                onChange={handleInputChange}
                className="border-green-300 focus:border-green-500 focus:ring-green-500"
              />
              <Input
                name="rawMaterialsQuantity"
                type="number"
                placeholder="Quantity"
                value={formData.rawMaterialsQuantity || ''}
                onChange={handleInputChange}
                className="border-green-300 focus:border-green-500 focus:ring-green-500"
              />
              <Select
                value={formData.rawMaterialsUnit || ''}
                onValueChange={(value) => handleSelectChange('rawMaterialsUnit', value)}
              >
                <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="tons">tons</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-green-600 hover:text-green-800">ⓘ</span>
                </TooltipTrigger>
                <TooltipContent className="bg-green-100 border-green-300 text-green-800">
                  <p>List major raw materials used and their approximate annual volumes.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="disposalMethod" className="text-green-800">Disposal Method</Label>
            <Select
              value={formData.disposalMethod || ''}
              onValueChange={(value) => handleSelectChange('disposalMethod', value)}
            >
              <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="Select disposal method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landfill">Landfill</SelectItem>
                <SelectItem value="incineration">Incineration</SelectItem>
                <SelectItem value="recycling">Recycling</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="predominantTravelMode" className="text-green-800">Predominant Travel Mode</Label>
            <Select
              value={formData.predominantTravelMode || ''}
              onValueChange={(value) => handleSelectChange('predominantTravelMode', value)}
            >
              <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="Select travel mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="public_transport">Public Transport</SelectItem>
                <SelectItem value="bicycle">Bicycle</SelectItem>
                <SelectItem value="walk">Walk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FormFieldProps {
  label: string
  name: string
  type: string
  unit?: string
  tooltip: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function FormField({ label, name, type, unit, tooltip, value, onChange }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={name} className="text-sm font-medium text-green-800">{label}</Label>
      <div className="flex items-center space-x-2">
        <div className="flex-shrink-0">
          <Input
            id={name}
            name={name}
            type={type}
            value={value || ''}
            onChange={onChange}
            className="border-green-300 focus:border-green-500 focus:ring-green-500 h-8 text-sm w-24"
          />
        </div>
        {unit && <span className="text-xs text-green-600 whitespace-nowrap">{unit}</span>}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="text-xs text-green-600 hover:text-green-800">ⓘ</span>
            </TooltipTrigger>
            <TooltipContent className="bg-green-100 border-green-300 text-green-800">
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

