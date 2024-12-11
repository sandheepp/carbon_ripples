import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Industry = 'Apparel' | 'Solar Panel Manufacturing' | 'Plastics'
type Scope = 'Scope 1' | 'Scope 2' | 'Scope 3'

interface IndustrySpecificSectionProps {
  industry: Industry
  scopes: Scope[]
  formData: Record<string, any>
  setFormData: (data: Record<string, any>) => void
}

export function IndustrySpecificSection({
  industry,
  scopes,
  formData,
  setFormData,
}: IndustrySpecificSectionProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-green-800">{industry} Specific Data</h2>
      <div className="space-y-4 bg-green-50 p-6 rounded-lg border border-green-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industry === 'Apparel' && (
            <>
              <FormField
                label="Fiber Inputs"
                name="fiberInputs"
                type="number"
                unit="kg/year"
                tooltip="Specify the predominant fibers used in garment production."
                value={formData.fiberInputs}
                onChange={handleInputChange}
              />
              <FormField
                label="Water Usage for Dyeing"
                name="waterUsageDyeing"
                type="number"
                unit="liters/year"
                tooltip="Specify the water usage for dyeing processes."
                value={formData.waterUsageDyeing}
                onChange={handleInputChange}
              />
              <FormField
                label="Dye Chemicals"
                name="dyeChemicals"
                type="number"
                unit="kg/year"
                tooltip="Specify the amount of dye chemicals used."
                value={formData.dyeChemicals}
                onChange={handleInputChange}
              />
              <FormField
                label="Dye Bath Temperature"
                name="dyeBathTemperature"
                type="number"
                unit="°C"
                tooltip="Specify the temperature requirements for dye baths."
                value={formData.dyeBathTemperature}
                onChange={handleInputChange}
              />
              <FormField
                label="Electricity Consumption for Sewing Machines"
                name="sewingMachineElectricity"
                type="number"
                unit="kWh/year"
                tooltip="Enter approximate energy usage for garment assembly."
                value={formData.sewingMachineElectricity}
                onChange={handleInputChange}
              />
              <FormField
                label="Off-cuts Percentage"
                name="offCutsPercentage"
                type="number"
                unit="%"
                tooltip="Enter the percentage of fabric wasted as off-cuts."
                value={formData.offCutsPercentage}
                onChange={handleInputChange}
              />
              <div className="space-y-2">
                <Label htmlFor="fiberType" className="text-sm font-medium text-green-800">Fiber Type</Label>
                <Select
                  value={formData.fiberType || ''}
                  onValueChange={(value) => handleSelectChange('fiberType', value)}
                >
                  <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500 h-8 text-sm">
                    <SelectValue placeholder="Select fiber type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="wool">Wool</SelectItem>
                    <SelectItem value="polyester">Polyester</SelectItem>
                    <SelectItem value="hemp">Hemp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          {industry === 'Solar Panel Manufacturing' && (
            <>
              <FormField
                label="Silicon Feedstock"
                name="siliconFeedstock"
                type="number"
                unit="kg/year"
                tooltip="Silicon purification and ingot growth are highly energy-intensive. Provide annual volumes."
                value={formData.siliconFeedstock}
                onChange={handleInputChange}
              />
              <FormField
                label="Furnace Electricity Consumption"
                name="furnaceElectricity"
                type="number"
                unit="kWh/year"
                tooltip="Specify the electricity consumption for ingot growth."
                value={formData.furnaceElectricity}
                onChange={handleInputChange}
              />
              <FormField
                label="Wafer Slicing Losses"
                name="waferSlicingLosses"
                type="number"
                unit="kg/year"
                tooltip="Specify the amount of silicon waste from wafer slicing."
                value={formData.waferSlicingLosses}
                onChange={handleInputChange}
              />
              <FormField
                label="Chemical Etchants"
                name="chemicalEtchants"
                type="number"
                unit="liters/year"
                tooltip="Specify the volume of chemical etchants used."
                value={formData.chemicalEtchants}
                onChange={handleInputChange}
              />
              <FormField
                label="Cleanroom Energy Consumption"
                name="cleanroomEnergy"
                type="number"
                unit="kWh/year"
                tooltip="Specify the energy consumption for cleanroom operation (filtration, HVAC)."
                value={formData.cleanroomEnergy}
                onChange={handleInputChange}
              />
              <FormField
                label="Glass Usage"
                name="glassUsage"
                type="number"
                unit="kg/year"
                tooltip="Specify the amount of glass used in module assembly."
                value={formData.glassUsage}
                onChange={handleInputChange}
              />
              <FormField
                label="Aluminum Frame Usage"
                name="aluminumFrameUsage"
                type="number"
                unit="kg/year"
                tooltip="Specify the amount of aluminum used for frames."
                value={formData.aluminumFrameUsage}
                onChange={handleInputChange}
              />
              <FormField
                label="Encapsulant Materials"
                name="encapsulantMaterials"
                type="number"
                unit="kg/year"
                tooltip="Specify the amount of encapsulant materials used."
                value={formData.encapsulantMaterials}
                onChange={handleInputChange}
              />
              <FormField
                label="Lamination Energy"
                name="laminationEnergy"
                type="number"
                unit="kWh/year"
                tooltip="Specify the energy consumption for the lamination process."
                value={formData.laminationEnergy}
                onChange={handleInputChange}
              />
            </>
          )}
          {industry === 'Plastics' && (
            <>
              <FormField
                label="Polymer Feedstocks"
                name="polymerFeedstocks"
                type="number"
                unit="kg/year"
                tooltip="Identify primary polymers and their source. Recycled resin often has lower embodied emissions."
                value={formData.polymerFeedstocks}
                onChange={handleInputChange}
              />
              <FormField
                label="Injection Molding Energy"
                name="injectionMoldingEnergy"
                type="number"
                unit="kWh/year"
                tooltip="Specify the energy consumption for injection molding processes."
                value={formData.injectionMoldingEnergy}
                onChange={handleInputChange}
              />
              <FormField
                label="Extrusion Energy"
                name="extrusionEnergy"
                type="number"
                unit="kWh/year"
                tooltip="Specify the energy consumption for extrusion processes."
                value={formData.extrusionEnergy}
                onChange={handleInputChange}
              />
              <FormField
                label="Drying and Pelletizing Energy"
                name="dryingPelletizingEnergy"
                type="number"
                unit="kWh/year"
                tooltip="Specify the energy consumption for drying and pelletizing processes."
                value={formData.dryingPelletizingEnergy}
                onChange={handleInputChange}
              />
              <FormField
                label="Additives"
                name="additives"
                type="number"
                unit="kg/year"
                tooltip="Specify the annual volume of plasticizers, stabilizers, and other additives."
                value={formData.additives}
                onChange={handleInputChange}
              />
              <FormField
                label="On-site Recycled Scrap Percentage"
                name="recycledScrapPercentage"
                type="number"
                unit="%"
                tooltip="Specify the percentage of scrap recycled on-site."
                value={formData.recycledScrapPercentage}
                onChange={handleInputChange}
              />
              <div className="space-y-2">
                <Label htmlFor="resinType" className="text-sm font-medium text-green-800">Resin Type</Label>
                <Select
                  value={formData.resinType || ''}
                  onValueChange={(value) => handleSelectChange('resinType', value)}
                >
                  <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500 h-8 text-sm">
                    <SelectValue placeholder="Select resin type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PE">PE</SelectItem>
                    <SelectItem value="PP">PP</SelectItem>
                    <SelectItem value="PVC">PVC</SelectItem>
                    <SelectItem value="PET">PET</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="resinOrigin" className="text-sm font-medium text-green-800">Resin Origin</Label>
                <Select
                  value={formData.resinOrigin || ''}
                  onValueChange={(value) => handleSelectChange('resinOrigin', value)}
                >
                  <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-500 h-8 text-sm">
                    <SelectValue placeholder="Select resin origin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="virgin">Virgin</SelectItem>
                    <SelectItem value="recycled">Recycled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
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

