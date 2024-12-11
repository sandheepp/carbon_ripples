import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type Scope = 'Scope 1' | 'Scope 2' | 'Scope 3'

interface ScopeSelectionProps {
  scopes: Scope[]
  setScopes: (scopes: Scope[]) => void
}

export function ScopeSelection({ scopes, setScopes }: ScopeSelectionProps) {
  const handleScopeChange = (scope: Scope) => {
    if (scopes.includes(scope)) {
      setScopes(scopes.filter((s) => s !== scope))
    } else {
      setScopes([...scopes, scope])
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-green-800">Scope Selection</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        {(['Scope 1', 'Scope 2', 'Scope 3'] as Scope[]).map((scope) => (
          <div key={scope} className="flex items-center space-x-2 bg-green-50 p-3 rounded-md border border-green-200">
            <Checkbox
              id={scope}
              checked={scopes.includes(scope)}
              onCheckedChange={() => handleScopeChange(scope)}
              className="border-green-500 text-green-500"
            />
            <Label htmlFor={scope} className="text-green-800 font-medium">{scope}</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-green-600 hover:text-green-800">ⓘ</span>
                </TooltipTrigger>
                <TooltipContent className="bg-green-100 border-green-300 text-green-800">
                  <p>{getScopeDescription(scope)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  )
}

function getScopeDescription(scope: Scope) {
  switch (scope) {
    case 'Scope 1':
      return 'Direct, on-site emissions'
    case 'Scope 2':
      return 'Indirect, purchased energy'
    case 'Scope 3':
      return 'Value chain emissions'
  }
}

