'use client'

import { useState } from 'react'
import { IndustrySelection } from './IndustrySelection'
import { ScopeSelection } from './ScopeSelection'
import { CommonDataSection } from './CommonDataSection'
import { IndustrySpecificSection } from './IndustrySpecificSection'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'
import { AlertTriangle, Save, RefreshCw } from 'lucide-react'

type Industry = 'Apparel' | 'Solar Panel Manufacturing' | 'Plastics' | null
type Scope = 'Scope 1' | 'Scope 2' | 'Scope 3'

export function MeasurementForm() {
  const [industry, setIndustry] = useState<Industry>(null)
  const [scopes, setScopes] = useState<Scope[]>(['Scope 1', 'Scope 2', 'Scope 3'])
  const [formData, setFormData] = useState<Record<string, any>>({})
  const { toast } = useToast()

  const handleIndustryChange = (newIndustry: Industry) => {
    if (industry && Object.keys(formData).length > 0) {
      if (confirm("Changing industry will reset all industry-specific data. Proceed?")) {
        setIndustry(newIndustry)
        setFormData({})
      }
    } else {
      setIndustry(newIndustry)
    }
  }

  const handleSave = () => {
    if (validateForm()) {
      // Implement save logic here
      console.log('Form data:', formData)
      toast({
        title: "Data Saved",
        description: "Your emissions data has been successfully saved.",
        className: "bg-green-100 border-green-500 text-green-800",
      })
    } else {
      toast({
        title: "Validation Error",
        description: "Please check your inputs and try again.",
        variant: "destructive",
      })
    }
  }

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all data?")) {
      setIndustry(null)
      setScopes(['Scope 1', 'Scope 2', 'Scope 3'])
      setFormData({})
    }
  }

  const validateForm = () => {
    // Implement form validation logic here
    return true // Placeholder
  }

  return (
    <form className="space-y-8 bg-white p-8 rounded-lg shadow-lg border border-green-200">
      <IndustrySelection industry={industry} setIndustry={handleIndustryChange} />
      <ScopeSelection scopes={scopes} setScopes={setScopes} />
      {scopes.length === 0 && (
        <Alert variant="destructive" className="bg-yellow-100 border-yellow-400 text-yellow-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            At least one emission scope must be selected to proceed.
          </AlertDescription>
        </Alert>
      )}
      <CommonDataSection scopes={scopes} formData={formData} setFormData={setFormData} />
      {industry && (
        <IndustrySpecificSection
          industry={industry}
          scopes={scopes}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={handleReset} className="border-green-500 text-green-700 hover:bg-green-50">
          <RefreshCw className="mr-2 h-4 w-4" /> Reset
        </Button>
        <Button type="button" onClick={handleSave} className="bg-green-500 text-white hover:bg-green-600">
          <Save className="mr-2 h-4 w-4" /> Save
        </Button>
      </div>
    </form>
  )
}

